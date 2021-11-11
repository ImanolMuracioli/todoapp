import react, {Component} from 'react'

const api_url = "http://localhost:3002/api/v1/folders"

class FolderList extends Component {

    constructor(props){
        super(props)
        
        this.state={
            items: []
        }
    }


    componentDidMount(){
        this.getFolders();
    }

    getFolders(){
        fetch(api_url)
            .then(response=> response.json())
            .then(response_items=>{
                this.setState({
                    items: response_items
                })
            })
    }

    render(){
        console.log(this.state.items)

        const productData =this.state.items;

        console.log(productData)
        
        return (
            <div>
                <ul id= "folders_list">
                 
                 </ul>

            </div>

        )
    }



}

export default FolderList;