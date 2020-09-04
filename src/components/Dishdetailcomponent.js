import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

class Dishdetail extends Component{
   
   renderDish(dish){
      if(dish != null){
         return(
            <div  className="col-12 col-md-5 m-1">
            <Card>
               <CardImg top src={dish.image} alt={dish.name} />
               <CardBody>
                  <CardTitle heading>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
            </div>
         );
      }
      else
      {
         return(<div></div>);
      }
   }
   renderComments(comments){
      if(comments != null){
         const mycomments = comments.map((comment)=>{
            return(
               <li id={comment.id}>
                  <p><span>-- {comment.author},</span> {comment.date}</p>
                  <p>{comment.comment}</p>
               </li>
            );
         });
         return(
            <div className ="col-12 col-md-5 m-1">
               
               <h4>Comments</h4>
               <ul class="list-unstyled">
                  {mycomments}
               </ul>
            </div>
         );
      }
      else
      {
         return(<div></div>);
      }
   }

   render(){

      return(

         <div class="row">
            {this.renderDish(this.props.dish)}
      
            {this.renderComments(this.props.dish.comments)}
         </div>
      );
   }
}

export default Dishdetail;