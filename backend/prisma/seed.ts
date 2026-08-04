import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma';
import * as bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import pg from 'pg';

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Iniciando seed do banco de dados...');

  // Criar tenant padrão
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'default' },
    update: {},
    create: {
      name: 'Restaurante Padrão',
      slug: 'default',
      domain: 'localhost',
    },
  });

  console.log(`✅ Tenant criado: ${tenant.name}`);

  // Criar usuário admin
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.staff.upsert({
    where: { tenantId_email: { tenantId: tenant.id, email: 'admin@suamesa.com' } },
    update: {},
    create: {
      tenantId: tenant.id,
      name: 'Administrador',
      email: 'admin@suamesa.com',
      password: adminPassword,
      role: 'superadmin',
      isActive: true,
    },
  });

  console.log(`✅ Admin criado: ${admin.email}`);

  // Criar mesas
  const mesasData = [
    { numero: 1, qrCode: `mesa-${uuidv4()}` },
    { numero: 2, qrCode: `mesa-${uuidv4()}` },
    { numero: 3, qrCode: `mesa-${uuidv4()}` },
    { numero: 4, qrCode: `mesa-${uuidv4()}` },
    { numero: 5, qrCode: `mesa-${uuidv4()}` },
  ];

  for (const mesaData of mesasData) {
    await prisma.mesa.upsert({
      where: { tenantId_numero: { tenantId: tenant.id, numero: mesaData.numero } },
      update: {},
      create: {
        tenantId: tenant.id,
        numero: mesaData.numero,
        qrCode: mesaData.qrCode,
        isActive: true,
      },
    });
  }

  console.log(`✅ 5 mesas criadas`);

  console.log('✨ Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
