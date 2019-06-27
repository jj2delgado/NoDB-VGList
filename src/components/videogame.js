import React, {Component} from 'react'

class Videogame extends Component{
    constructor(props){
        super()
        this.state = {
            edit: false,
            review: props.review,
            rating: props.rating
        }
        this.flipEdit = this.flipEdit.bind(this)
        this.saveChanges = this.saveChanges.bind(this)
        this.handleReviewChange = this.handleReviewChange.bind(this)
        this.handleRatingChange = this.handleRatingChange.bind(this)
    }
    flipEdit(){
        this.setState({edit: !this.state.edit})
    }
    saveChanges(){
        this.flipEdit()
        this.props.edit(this.props.id, this.state.review, this.state.rating)
        console.log(this.state.review)
    }
    handleReviewChange(e){
        this.setState({review: e.target.value})
    }
    handleRatingChange(e){
        this.setState({rating: e.target.value})
    }

    render(){
        let {edit, review, rating} = this.state
        return(
            <div>
                <img src={this.props.image} alt=""/>
                <h2>{this.props.id}</h2>
                <h2>Title: {this.props.title}</h2>
                {edit ? (<div> <input value={review} onChange={this.handleReviewChange} /> <input value={rating} onChange={this.handleRatingChange}/> </div>) : (<div> <p>Review: {this.props.review}</p><p>Rating: {this.props.rating}</p> </div>)}
                {edit ? (<button onClick={() => this.saveChanges()}>Save Changes</button>) : (<button onClick={() => this.flipEdit()}>Edit</button>)}
                
                
                <button className="deleteGame" onClick={() => this.props.delete(this.props.id)}>Delete</button>
            </div>
        )
    }
}
export default Videogame