import express, {Application} from 'express';
import morgan from 'express'
//routes
import IndexRoutes from './routes/index_routes'
import PostRoutes from './routes/post.routes'

export class App{
    app:Application;

 constructor(private  port?: number | string ){
     this.app = express();
     this.setting();
     this.middlewares();
     this.routes();
 }
 setting(){
     this.app.set('port',this.port || process.env.PORT || 3000);
 }
 middlewares(){
     this.app.use(morgan('dev'));
 }
 routes(){
     this.app.use(IndexRoutes);
     this.app.use('/posts',PostRoutes);
 }
 async listen(){
  await this.app.listen(this.app.get('port'));
  console.log('server on port ', this.app.get('port'));

 }
}