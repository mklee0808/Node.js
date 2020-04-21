import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class AddrsTableRow extends Component {

    constructor(props) { // state값을 초기화 하거나, 메서드를 바인딩 할 때 사용
        super(props); // super가 없으면 this 키워드를 사용 불가
        this.addrDelete = this.addrDelete.bind(this);
        this.addrUpdate = this.addrUpdate.bind(this);
    }

    addrDelete() {
        axios.delete('http://localhost:8000/api/addr/' + this.props.data._id)
            .then((res) => {
                alert('삭제 성공')
                window.location.reload()
            }).catch((error) => { 
                console.log(error)
            })
    }


    addrUpdate = event => {
        window.location.href = '/addr/update/' + this.props.data._id
    }

    render() { 
        return (
            <tr>
                <td>{this.props.data._id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.email}</td> 
                <td>{this.props.data.phone}</td>
                <td>
                    <Button onClick={this.addrUpdate} size="sm" variant="danger">Edit</Button> 
                    &nbsp;&nbsp;&nbsp;
                    <Button onClick={this.addrDelete} size="sm" variant="danger">Delete</Button> 
                </td> 
            </tr>
        );
    } 
}