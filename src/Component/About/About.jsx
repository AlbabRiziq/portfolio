import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="bg-blue-100 h-60 w-60 flex justify-center items-center flex-col rounded-3xl shadow-xl m-10">
                <img src={this.props.gambar} alt="" className="h-20 m-10 w-20" />
                <p className="text-md">{this.props.tentang}</p>
            </div>
        );
    }
}

export default About;