
import ValidToken from './ValidToken'
import { redirect } from 'react-router-dom';

export default function MainLoader()
{
    if (!ValidToken()) {
        return redirect('/login');
      }
      return null;
}