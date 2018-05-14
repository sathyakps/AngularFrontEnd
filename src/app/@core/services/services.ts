import { AuthGuard } from './../auth-guard/auth.guard';
import { UserService } from './user.service';
import { DataService } from './data.service';
import { ProductService } from './product.service';

/**
 * Array of core services for the app SPA
 */
export const CORE_SERVICES: any[] = [UserService, AuthGuard, DataService, ProductService];
