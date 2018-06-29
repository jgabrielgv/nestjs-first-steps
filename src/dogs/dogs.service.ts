import { Injectable } from '@nestjs/common';

import { Dog } from './models/dog.interface';

@Injectable()
export class DogsService {
    getDogs(): Dog[] {
        return [
            {
                name: 'Marty',
                weight: 20
            }
        ];
    }
}