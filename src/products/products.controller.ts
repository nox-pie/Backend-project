import { Controller,Get,Post,Put,Delete,Param,Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductsService){}
    @Get('')
    getProducts(){
        return this.productService.getProducts();
    }

    @Get(':id')
    getProductById(@Param('id')id:string){
        return this.productService.getProductById(id);
    }

    @Post('')
    createProduct(@Body() productData: any){
        return this.productService.createProduct(productData)
    }

    @Put(':id')
    updateProduct(@Param('id') id:string, @Body() productDate: any){
        return this.productService.updateProduct(id,productDate)
    }

    @Delete(':id')
    deleteProduct(@Param('id') id: string){
        return this.productService.deleteProduct(id)
    }
}

