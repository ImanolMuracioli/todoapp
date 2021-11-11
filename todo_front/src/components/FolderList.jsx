import react, {Component} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


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
            
                <div >


                {console.log(this.state.items[0])}

                <h2>Folders</h2>
                
                {this.state.items.map((item) => {
                    {console.log(item.name)}
                    return (

                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                <ImageIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={item.name} secondary={item.created_at} /> <p style={{paddingLeft: "10px"}}> Prueba</p>
                        </ListItem>
                        </List>
                    )
                })}
                
            </div>

        )
    }



}

export default FolderList;