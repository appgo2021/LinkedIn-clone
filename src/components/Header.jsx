import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from '../helpers/HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>

      <div className='header__left'>
        <img src='http://pngimg.com/uploads/linkedIn/small/linkedIn_PNG2.png' alt=''/>

        <div className='header__search'>
          <SearchIcon/>
          <input placeholder='Search' type='text'></input>
        </div>
      </div>

      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title='Home'/>
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
        <HeaderOption Icon={ChatIcon} title='Messaging'/>
        <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
        <HeaderOption avatar={true} title='me' onClick={logoutOfApp}/>
      </div>
    </div>
  )
}

export default Header