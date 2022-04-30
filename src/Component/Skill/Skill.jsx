import React from "react";


class Skill extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className="flex flex-col w-60 p-10 justify-center items-center bg-blue-100 rounded-xl shadow-xl m-10">
                <img src={this.props.gambar} alt="" className="h-36 w-auto mb-7" />
                <p>{this.props.nama}</p>
            </div>
        );
    }
}

export default Skill;