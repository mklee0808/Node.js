import React, { Component } from 'react'
import api from '../api'
import AddrsTableRow from '../components/AddrsTableRow'
import Table from 'react-bootstrap/Table'
 
class addrList extends Component {
    // 1
    constructor(props) {
        super(props)
        this.state = {
            addrs: [],
        }
    }
    
    // 2 대기 -> 7
    async addrList() {
            const response = await api.addrList();
            this.setState({
            addrs : response.data.data, 
        })
    }

    // 3 대기 -> 6
    // 외부 API 호출
    componentDidMount() {
       this.addrList()
    }

    // 4 대기 -> 8
    DataTable() {        
        const addrs = this.state.addrs
        console.log(addrs) 
        return addrs.map((data) => {

        return <AddrsTableRow data={data}/>
        });  
    }
    
    // 5
    render() { 
        return (
            <div className="table-wrapper">
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th>아이디</th> 
                            <th>이름</th>
                            <th>이메일</th>
                            <th>전화번호</th>
                            <th>수정</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default addrList