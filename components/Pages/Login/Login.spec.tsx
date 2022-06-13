import {findByRole, findByTestId, render, screen} from '@testing-library/react' // (or /dom, /vue, ...)
import { waitForDebugger } from 'inspector'
import Login from './Login'

describe('', ()=>{
  test('should show login form', () => {
    render(<Login />)

    const $login = screen.getByTestId('login');    
    expect($login).toBeDefined();
    // Events and assertions...
  })
})



