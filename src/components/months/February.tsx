import React from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const February = () => {
  return (
    <>
    


    {/* Navbar */}
    <div>
        <div className="row">
            <div className="col-7 d-flex justify-content-end">
                <h1>Moody</h1>
            </div>
            <div className="col p-3">
                <div className="row">
                    <div className="col">Moody Calendar</div>
                    <div className="col">Moody.ai</div>
                </div>
            </div>
        </div>
    </div>
     {/* Navbar */}


    <h1 className='text-center'>
        February
    </h1>





    {/* days of the week button */}
    <div>
    <Button variant="secondary m-3">S</Button>{''}
    <Button variant="secondary m-3 ">M</Button>{''}
    <Button variant="secondary m-3">T</Button>{''}
    <Button variant="secondary m-3">W</Button>{''}
    <Button variant="secondary m-3">T</Button>{''}
    <Button variant="secondary m-3">F</Button>{''}
    <Button variant="secondary m-3">S</Button>{''}
    </div>

    <div>
    <Button variant="secondary m-3">1</Button>{''}
    <Button variant="secondary m-3">2</Button>{''}
    <Button variant="secondary m-3">3</Button>{''}
    <Button variant="secondary m-3">4</Button>{''}
    <Button variant="secondary m-3">5</Button>{''}
    <Button variant="secondary m-3">6</Button>{''}
    <Button variant="secondary m-3">7</Button>{''}
    </div>

    <div>
    <Button variant="secondary m-3">8</Button>{''}
    <Button variant="secondary m-3">9</Button>{''}
    <Button variant="secondary m-3">10</Button>{''}
    <Button variant="secondary m-3">11</Button>{''}
    <Button variant="secondary m-3">12</Button>{''}
    <Button variant="secondary m-3">13</Button>{''}
    <Button variant="secondary m-3">14</Button>{''}
    </div>

    <div>
    <Button variant="secondary m-3">15</Button>{''}
    <Button variant="secondary m-3">16</Button>{''}
    <Button variant="secondary m-3">17</Button>{''}
    <Button variant="secondary m-3">18</Button>{''}
    <Button variant="secondary m-3">19</Button>{''}
    <Button variant="secondary m-3">20</Button>{''}
    <Button variant="secondary m-3">21</Button>{''}
    </div>
    <div>
    <Button variant="secondary m-3">22</Button>{''}
    <Button variant="secondary m-3">23</Button>{''}
    <Button variant="secondary m-3">24</Button>{''}
    <Button variant="secondary m-3">25</Button>{''}
    <Button variant="secondary m-3">26</Button>{''}
    <Button variant="secondary m-3">27</Button>{''}
    <Button variant="secondary m-3">28</Button>{''}
    </div>
    <div>
    <Button variant="secondary m-3">29</Button>{''}
    <Button variant="secondary m-3">30</Button>{''}
    <Button variant="secondary m-3">31</Button>{''}
 
    </div>

    {/* days of the week button */}


    
    
    </>
  )
}

export default February