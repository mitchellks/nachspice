import React from "react";
import axios from "./axios";


export default class Uploader extends React.Component {
    constructor () {
        super ();
        this.state = {};

    }
    componentDidMount ( ) {
        console.log("Uploader did mount");
        console.log("this.props:", this.props);
    }

    handleChange({target}) {
        // let target = e.target;
        // this[target.name] = taeget.value
        this.setState({
            [target.name]: target.value
        });

    }


    uploadPic() {
        this.props.methodInApp("upload pic?");
    }



    upload() {
        var fd = new FormData();
        fd.append("image", this.state.image);

        axios
            .post("/api/uploadavatar", fd)
            .then(res => {
                console.log(res);
                this.props.setImage(res.data.imageurl);
            })
            .catch(err => {
                console.log(err);
            });
    }



    render () {
        return (
            <div className="uploader">
                <input name="image" placeholder="image" type="file" onChange={e => this.setState({
                    image : e.target.files[0]
                })} />
                <button onClick={() => this.upload() }> UPLOAD</button>
            </div>
        )
    }
}
