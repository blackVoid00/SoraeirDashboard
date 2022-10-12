import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {FaSearch,FaUserAlt} from "react-icons/fa"
import Table from '@mui/material/Table';
import TableFooter  from '@mui/material/TableFooter';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import  Input  from "@mui/material/Input";
import  IconButton  from "@mui/material/IconButton";
import  EditIcon  from "@mui/icons-material/EditOutlined";
import  DeleteIcon  from "@mui/icons-material/DeleteOutlined";
import  DoneIcon  from "@mui/icons-material/DoneAllTwoTone";
import  RevertIcon  from "@mui/icons-material/NotInterestedOutlined";
import './cutomer.css'
import { makeStyles } from '@mui/styles'
import { BsPeople } from "react-icons/bs";
const useStyles = makeStyles(theme => ({
    marginAutoContainer: {
     marginLeft:50,
     marginTop:10
    },
    marginAutoItem: {
      margin: 'auto'
    },
    alignItemsAndJustifyContent: {
      width: 500,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    }
  }))
  const TableCell2=({item,name,onChange})=>{
    return(
      <TableCell>
        {item.isEditMode? (
          <Input key={`input-field${item[name]+item.customer_id}`}
          autoFocus="autoFocus"
          value={item[name]}
          name={name}
          onChange={e => onChange(e,item)}
          className="myFormEdit"/>
        ) : (
           item[name]
        )}
      </TableCell>
    )
    };
 
const Customer= () => {
  const navigate=useNavigate();
  const changeLoc=() => {
  navigate('/addformcustomer');
  }
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    const classes = useStyles()
    const [customer,setCustomer]=useState([]);
    const [search , setSearch] = useState("");
    const [avantElement, setavantElement] = useState({});
   
    const onChange = (e,item) => {
     if(!avantElement[item.customer_id]){
       setavantElement(state => ({...state, [item.customer_id]:item }))
     }
     const value=e.target.value;
     const name=e.target.name;
     const {customer_id}=item;
     const newcustomerlist=customer.map((item) =>{
       if(item.customer_id===customer_id){
         return {...item,[name]:value}
       }
       return item;
     });
     setCustomer(newcustomerlist);
    } ;

  
  
    const getCustomerData = async ()=>{
        try{
             const data = await axios.get("http://localhost:5000/api/customers")
            //.then((response)=>{
            //   const result = response.data.map(function(el){
            //     var o=Object.assign({},el.attributes);
            //     o.isEditMode=false;
            //     return
            //   })
            // });
            console.log(data.data);
            setCustomer(data.data);
        }catch(e){
         console.log(e)}
    }

    const updateCustomer = async({customer_id,customer_firstname,customer_lastname,customer_email,customer_address,customer_phone})=>{
      try{
      await axios.put("http://localhost:5000/api/customers/"+customer_id,{
      customer_firstname:customer_firstname,
      customer_lastname:customer_lastname,
      customer_email:customer_email,
      customer_address:customer_address,
      customer_phone:customer_phone}).then(()=>{
        alert("Customer successfully updated");
      })}catch(e){console.log(e)}
    }
    useEffect(()=>{
        getCustomerData()
    },[])
    const DeleteCustomer=(customer_id)=>{
      try{
        axios.delete("http://localhost:5000/api/customers/"+customer_id).then(response=>{
          setCustomer(
            customer.filter((item)=>{
            return item.customer_id != customer_id;
          }))
        })
      }catch(e){console.log(e)}
    }

    const onToggleEditMode=id_customer=>{
      const newcustomerlist=customer.map(item=>{
        if(item.customer_id===id_customer){
          return{...item,isEditMode:!item.isEditMode}
        }
        return item;
      });
      setCustomer(newcustomerlist)
    }

    const onToggleDone=id_customer=>{
      setCustomer(()=>{
        return customer.map(item=>{
          if(item.customer_id===id_customer){
            updateCustomer(item)
            return {...item, isEditMode: !item.isEditMode}
          }
          return item
        })
      })
    }
    const onRevert=id_customer=>{
      const newcustomerlist=customer.map(item=>{
        if(item.customer_id === id_customer){
          return avantElement[id_customer] ?{...avantElement[id_customer],isEditMode: !item.isEditMode}:
          {...item , isEditMode: !item.isEditMode}
        }
        return item;
      }); 
      setCustomer(newcustomerlist);
      setavantElement(state => {
        delete state[id_customer];
        return state;
      })
    }
    return <div className="customermaindiv">

   <h1>Customer List &nbsp;&nbsp;&nbsp; <span><BsPeople size={30} /> </span></h1> 
    <i className="icon"> <FaSearch  size={15}/></i>
    <input  className="input1" type="text" placeholder="search by name" onChange={(e)=>{setSearch(e.target.value)}}/>
    <button className="buton" onClick={changeLoc}> Add a customer</button>
    
      {/* {customer.filter(
          (item)=>{
              if(search == "") {
                return item;
              }else if(item.first_name.toLowerCase().includes(search.toLowerCase())) {
                  return item;
              }

          })
        .map((item)=>{
          return <p> {item.first_name}</p>
      })} */}
        <TableContainer component={Paper} className={classes.marginAutoContainer}>
      <Table   stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Id customer</TableCell>
            <TableCell >First name</TableCell>
            <TableCell >Last name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Address</TableCell>
            <TableCell >phone number</TableCell>
            <TableCell >Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
          {/* {customer.filter((item) =>{
              if(search == "") {
                return item;
              }else if(item.first_name.toLowerCase().includes(search.toLowerCase())) {
                  return item;
              }} */}
               {(rowsPerPage > 0
            ? customer.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : customer
              ).filter((item) =>{
                if(search == "") {
                  return item;
                }else if(item.customer_firstname.toLowerCase().includes(search.toLowerCase())) {
                    return item}})
                    .map((item) => (
            <TableRow
              key={item.customer_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell2 {...{item, name:"customer_id",onChange}}/>
              <TableCell2 {...{item, name:"customer_firstname",onChange}}/>
              <TableCell2 {...{item, name:"customer_lastname",onChange}} />
              <TableCell2 {...{item, name:"customer_email",onChange}}/>
              <TableCell2 {...{item, name:"customer_address",onChange}}/>
              <TableCell2 {...{item, name:"customer_phone",onChange}}/>
            
                 {/* <TableCell component="th" scope="row">
                {item.id_customer}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.first_name}
              </TableCell>
              <TableCell>{item.last_name}</TableCell>
              <TableCell  >{item.email}</TableCell>
              <TableCell>{item.phonenumbber}</TableCell>
              <TableCell >{item.age}</TableCell>
              <TableCell >{item.address}</TableCell> */}
              <TableCell>
                
                {item.isEditMode ? (
                  <>
                  <IconButton aria-label="revert" onClick={()=>onRevert(item.customer_id)}>
                    <RevertIcon style={{color:"#B20600"}} />
                  </IconButton>
                  <IconButton aria-label="done"  onClick={()=>onToggleDone(item.customer_id)}>
                    <DoneIcon style={{color:"#83BD75"}}/>
                  </IconButton>
                  </> ) :(
                    <>
                    <IconButton aria-label="edit" onClick={()=>onToggleEditMode(item.customer_id)}>
                      <EditIcon style={{color:"#00B2B8"}}/>
                    </IconButton>
                    <IconButton aria-label="delete" onClick={()=>DeleteCustomer(item.customer_id)}>
                      <DeleteIcon style={{color:"#B20600"}}/>
                    </IconButton>
                    </>
                  )
                }
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
        </Table>
    </TableContainer>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={customer.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
   
  
  
    </div> 
    ;
};

export default Customer; 