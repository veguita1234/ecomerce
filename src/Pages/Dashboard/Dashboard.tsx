import './Dashboard.css';
import React from 'react';
import { Card, CardContent, Typography, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BsFillBarChartFill, BsBriefcaseFill  } from "react-icons/bs";
import { HiUsers } from "react-icons/hi2";
import { FaUser,FaUserPlus  } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineLogin, MdErrorOutline  } from "react-icons/md";
import { RiMenuFold3Fill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';




// Dummy data for the chart
const data = [
  { name: 'January', Total: 1200 },
  { name: 'February', Total: 2100 },
  { name: 'March', Total: 800 },
  { name: 'April', Total: 1600 },
  { name: 'May', Total: 900 },
  { name: 'June', Total: 1700 },
];

// Dummy data for the table
const rows = [
  { id: 1, username: 'Snow', email: 'snow@example.com', age: 35 },
  { id: 2, username: 'Jamie', email: 'jamie@example.com', age: 42 },
  { id: 3, username: 'Lannister', email: 'lannister@example.com', age: 45 },
];



const Sidebar: React.FC = () => {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/principal'); 
  };

  return (
    <Paper style={{backgroundColor:"#1C2536",borderRadius:"0"}} className="sidebar">
      <Typography variant="h6" gutterBottom>
        Empresa
      </Typography><br/>
      <div style={{display:"flex",flexDirection:"column",gap:"1em"}}>
        <Typography variant="body1"><button className='boton-menu'><BsFillBarChartFill  className='icono-menu' /><span className='palabra-menu'>Overview</span></button></Typography>
        <Typography variant="body1"><button className='boton-menu'><HiUsers   className='icono-menu' /><span className='palabra-menu'>Customers</span></button></Typography>
        <Typography variant="body1"><button className='boton-menu'><BsBriefcaseFill   className='icono-menu' /><span className='palabra-menu'>Companies</span></button></Typography>
        <Typography variant="body1"><button className='boton-menu'><FaUser   className='icono-menu' /><span className='palabra-menu'>Account</span></button></Typography>
        <Typography variant="body1"><button className='boton-menu'><IoSettingsSharp   className='icono-menu' /><span className='palabra-menu'>Settings</span></button></Typography>
        <Typography variant="body1"><button className='boton-menu'><MdOutlineLogin   className='icono-menu' /><span className='palabra-menu'>Login</span></button></Typography>
        <Typography variant="body1"><button className='boton-menu'><FaUserPlus   className='icono-menu' /><span className='palabra-menu'>Register</span></button></Typography>
        <Typography variant="body1"><button className='boton-menu' onClick={handleButtonClick}><RiMenuFold3Fill className='icono-menu' /><span className='palabra-menu'>Menú Principal</span></button></Typography>
      </div>
      
    </Paper>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className="dashboardContainer">
      <Sidebar  />
      <div className="content">
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Sales Overview
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  User Statistics
                </Typography>
                <TableContainer component={Paper} style={{ height: 300, width: '100%' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Age</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow key={row.id}>
                          <TableCell>{row.id}</TableCell>
                          <TableCell>{row.username}</TableCell>
                          <TableCell>{row.email}</TableCell>
                          <TableCell>{row.age}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Activities
                </Typography>
                <div>
                  <Typography>Activity 1: User A logged in</Typography>
                  <Typography>Activity 2: User B updated profile</Typography>
                  <Typography>Activity 3: User C completed a transaction</Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
