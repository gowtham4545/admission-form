import { redirect, useNavigate } from 'react-router-dom';
import './index.css';
import React, { useEffect, useState } from 'react'

const Index = () => {
    const [page, setPage] = useState(1);
    const [p1t1, setp1t1] = useState();
    const [p1t2, setp1t2] = useState();
    const [p1t3, setp1t3] = useState();
    const [p1t4, setp1t4] = useState();
    const [p1t5, setp1t5] = useState();
    const [p1r1, setp1r1] = useState();
    const [p1r2, setp1r2] = useState();
    const [p2t1, setp2t1] = useState();
    const [p2t2, setp2t2] = useState();
    const [p2t3, setp2t3] = useState();
    const [p2t4, setp2t4] = useState();
    const [p2t5, setp2t5] = useState();
    const [p2r1, setp2r1] = useState();
    const [p2r2, setp2r2] = useState();
    const [p3slt, setp3slt] = useState();
    const [p3ch, setp3ch] = useState();
    const [progress, setProgress] = useState(0);
    const [position, setPosition] = useState('sticky');

    const navigate=useNavigate();

    function nextPage() {
        if(progress===100){
            redirect(`review`)
            navigate(`./review?p1t1=${p1t1}&p1t2=${p1t2}&p1t3=${p1t3}&p1t4=${p1t4}&p1t5=${p1t5}&p1r1=${p1r1}&p1r2=${p1r2}&p2t1=${p2t2}&p2t3=${p2t3}&p2t4=${p2t4}&p2t5=${p2t5}&p2r1=${p2r1}&p2r2=${p2r2}&p3slt=${p3slt}&p3ch=${p3ch}`)
        }
        else if (page===1 && progress === (7 / 16 * 100))
            setPage(page + 1);
        else if (page===2 && progress === (14 / 16 * 100))
            setPage(page + 1);
        else if (page === 3 && p3ch !== 'Yes')
            alert('Please agree to the conditions');
        else alert('Fill all the fields!');
        console.log(page);
        console.log(progress);
    }

    function Progress() {
        let count = 0;
        count += (p1t1 ? 1 : 0);
        count += (p1t2 ? 1 : 0);
        count += (p1t3 ? 1 : 0);
        count += (p1t4 ? 1 : 0);
        count += (p1t5 ? 1 : 0);
        count += (p2t1 ? 1 : 0);
        count += (p2t2 ? 1 : 0);
        count += (p2t3 ? 1 : 0);
        count += (p2t4 ? 1 : 0);
        count += (p2t5 ? 1 : 0);
        count += (p1r1 ? 1 : 0);
        count += (p1r2 ? 1 : 0);
        count += (p2r1 ? 1 : 0);
        count += (p2r2 ? 1 : 0);
        count += (p3slt ? 1 : 0);
        count += (p3ch ? 1 : 0);
        setProgress(count / 16 * 100);
        if(page===3)setPosition('absolute');
        else setPosition('sticky');
    }

    let item1 = ['Name', "Father Name", 'Mother Name', 'City', 'State', ['Male', 'Female'], ['Rural', 'Urban']]
    let item2 = ['College Name', 'City', 'State', 'Percentage', 'Grade', ['ICSE', 'CBSE'], ['PCMB', 'PCMC']]

    function renderSwitch(page) {
        switch (page) {
            case 1:
                return <>
                    <div className='page'>
                        <h2>Student Details</h2>
                        <div action={null}>
                            <div className='input'>
                                <div className='label'>{item1[0]}</div>
                                <input className='t' type='' onChange={(e) => setp1t1(e.target.value)} required />
                            </div>
                            <div className='input'>
                                <div className='label'>{item1[1]}</div>
                                <input className='t' type='' onChange={(e) => setp1t2(e.target.value)} required />
                            </div>
                            <div className='input'>
                                <div className='label'>{item1[2]}</div>
                                <input className='t' type='' onChange={(e) => setp1t3(e.target.value)} required />
                            </div>
                            <div className='input'>
                                <div className='label'>{item1[3]}</div>
                                <input className='t' type='' onChange={(e) => setp1t4(e.target.value)} required />
                            </div>
                            <div className='input'>
                                <div className='label'>{item1[4]}</div>
                                <input className='t' type='' onChange={(e) => setp1t5(e.target.value)} required />
                            </div>
                            <div className='input'>
                                <input className='r' id='p1r1c1' type='radio' onChange={(e) => setp1r1(e.target.value)} name='p1r1' value={item1[5][0]} required />
                                <label htmlFor='p1r1c1' className='label'>{item1[5][0]}</label>
                                <input className='r' id='p1r1c2' type='radio' onChange={(e) => setp1r1(e.target.value)} name='p1r1' value={item1[5][1]} required />
                                <label htmlFor='p1r1c2' className='label'>{item1[5][1]}</label>
                            </div>
                            <div className='input'>
                                <input className='r' id='p1r2c1' type='radio' onChange={(e) => setp1r2(e.target.value)} name='p1r2' value={item1[6][0]} required />
                                <label htmlFor='p1r2c1' className='label'>{item1[6][0]}</label>
                                <input className='r' id='p1r2c2' type='radio' onChange={(e) => setp1r2(e.target.value)} name='p1r2' value={item1[6][1]} required />
                                <label htmlFor='p1r2c2' className='label'>{item1[6][1]}</label>
                            </div>
                            <div className='input'>
                                <div className='label'>Photo</div>
                                <input className='f' type='file' required />
                            </div>
                            <input className='submit' type='button' onClick={nextPage} value={'Next'} />
                        </div>
                    </div>
                </>

            case 2:
                return <>
                    <div className='page'>
                        <h2>Study Details</h2>
                        <form>
                            <div className='input'>
                                <div className='label'>{item2[0]}</div>
                                <input className='t' type='' onChange={(e) => setp2t1(e.target.value)} required />
                            </div>
                            <div className='input'>
                                <div className='label'>{item2[1]}</div>
                                <input className='t' type='' onChange={(e) => setp2t2(e.target.value)} required />
                            </div>
                            <div className='input'>
                                <div className='label'>{item2[2]}</div>
                                <input className='t' type='' onChange={(e) => setp2t3(e.target.value)} required />
                            </div>
                            <div className='input'>
                                <div className='label'>{item2[3]}</div>
                                <input className='t' type='' onChange={(e) => setp2t4(e.target.value)} required />
                            </div>
                            <div className='input'>
                                <div className='label'>{item2[4]}</div>
                                <input className='t' type='' onChange={(e) => setp2t5(e.target.value)} required />
                            </div>
                            <div className='input'>
                                <input className='r' type='radio' onChange={(e) => setp2r1(e.target.value)} name='p1r1' value={item2[5][0]} required />
                                <div className='label'>{item2[5][0]}</div>
                                <input className='r' type='radio' onChange={(e) => setp2r1(e.target.value)} name='p1r1' value={item2[5][1]} required />
                                <div className='label'>{item2[5][1]}</div>
                            </div>
                            <div className='input'>
                                <input className='r' type='radio' onChange={(e) => setp2r2(e.target.value)} name='p1r2' value={item2[6][0]} required />
                                <div className='label'>{item2[6][0]}</div>
                                <input className='r' type='radio' onChange={(e) => setp2r2(e.target.value)} name='p1r2' value={item2[6][1]} required />
                                <div className='label'>{item2[6][1]}</div>
                            </div>
                            <div className='input'>
                                <div className='label'>Marks Card</div>
                                <input className='f' type='file' required />
                            </div>
                            <input className='submit' type='submit' onClick={nextPage} value={'Next'} />
                        </form>
                    </div>
                </>

            case 3:
                return <>
                    <div className='page'>
                        <h2>Admission</h2> 
                        <div className='input'>
                            <div className='label'>Course</div>
                            <select className='f' type='' onLoad={(e) => setp3slt(e.target.value)} onClick={(e) => setp3slt(e.target.value)} required >
                                <option value='B.Tech'  onClick={(e) => setp3slt(e.target.value)}>Select One</option>
                                <option value='B.Tech' defaultChecked onClick={(e) => setp3slt(e.target.value)}>B.Tech</option>
                                <option value='B.Arch' onClick={(e) => setp3slt(e.target.value)}>B.Arch</option>
                                <option value='B.Sc' onClick={(e) => setp3slt(e.target.value)}>B.Sc</option>
                                <option value='B.Com' onClick={(e) => setp3slt(e.target.value)}>B.Com</option>
                            </select>
                        </div>
                        <div className='input'>
                            <input className='f' type='checkbox' onChange={(e) => setp3ch(e.target.value)} value={'Yes'} required />
                            <div className='info'>By clicking this, You agree to all the terms and conditions of the college.</div>
                        </div>
                    </div>
                    <input className='submit' style={{color:'black'}} type='submit' onClick={nextPage} value={'Submit'}/>
                </>

            default:
                return null;
        }
    }

    useEffect(Progress);

    return (
        <div>
            <h1 className='heading'>Admission Form</h1>
            {
                renderSwitch(page)
            }
            <div className='progress' style={{ width: `${progress}vw`,position: position}}></div>
        </div>
    )
}



export default Index;
