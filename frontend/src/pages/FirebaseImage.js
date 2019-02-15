import React, { Component } from 'react'
import '../animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


export default class FirebaseImage extends Component {
    state = {
        imageUrl: null
    }
    componentDidMount() {
        this.getImageURL(this.props.firebasePath)
            .then(URL => {
                this.setState({
                    imageUrl: URL
                });
            })
    }
    getImageURL(firebaseStoragePath) {
        const storage = this.props.app.storage();
        const picReference = storage.ref(firebaseStoragePath)
        return picReference.getDownloadURL();
    }
    render() {
        return (
            <ScrollAnimation animateIn="fadeInUp" animateOnce= {true}>
                <img src={this.state.imageUrl}/>
            </ScrollAnimation>
        )
    }
}
