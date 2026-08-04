import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Extrai o tenant do subdomínio
    // Exemplo: restaurante.localhost:3001 -> restaurante
    // Exemplo: restaurante.192.168.101.15:3001 -> restaurante

    const host = req.get('host') || '';
    const parts = host.split('.');

    let tenantId = 'default';

    // Se houver mais de 1 parte antes do domínio/IP, é um subdomínio
    if (parts.length > 1) {
      const firstPart = parts[0];
      // Verifica se não é um IP (não contém números apenas)
      if (!/^\d+$/.test(firstPart)) {
        tenantId = firstPart;
      }
    }

    // Armazena o tenant no request
    (req as any).tenantId = tenantId;

    next();
  }
}
