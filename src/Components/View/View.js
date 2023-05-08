import React from 'react';
import './index.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function useQuery() {
    const { search } = useLocation();

    return search;
}

function View() {
    const state = useSelector((state) => state.Reducer)
    console.log(state);
    const search = useQuery();
    // const params = React.useMemo(() => new URLSearchParams(search), [search]);
    // const p1t1 = params.get('p1t1')
    // const p1t2 = params.get('p1t2')
    // const p1t3 = params.get('p1t3')
    // const p1t4 = params.get('p1t4')
    // const p1t5 = params.get('p1t5')
    // const p2t1 = params.get('p2t1')
    // const p2t2 = params.get('p2t2')
    // const p2t3 = params.get('p2t3')
    // const p2t4 = params.get('p2t4')
    // const p2t5 = params.get('p2t5')
    // const p2r1 = params.get('p2r1')
    // const p2r2 = params.get('p2r2')
    // const p1r1 = params.get('p1r1')
    // const p1r2 = params.get('p1r2')
    // const p3ch = params.get('p3ch')
    // const p3slt = params.get('p3slt')

    const labels = ['Name', "Father Name", 'Mother Name', 'City', 'State', 'Gender', 'Area', 'College Name', 'City', 'State', 'Percentage', 'Grade', 'Syllabus', 'Subjects', 'Course', 'Agree with conditions']
    const arr = [state.name, state.fName, state.mName, state.city, state.state, state.gender, state.area, state.cName, state.cCity, state.cState, state.percent, state.grade, state.syllabus, state.subject, state.course, state.agree, state.image]
    console.log(arr.length);
    return (
        <div>
            <h1 className='heading'>Review</h1>
            <div className='details'>
                <div className='block'>
                    <h2>Personal Details</h2>
                    {arr[16]?(
                        <img className='image' alt={''}/>
                    ):(<></>)}
                    {arr[0] ? (<div className='detail'>
                        <div className='label'>{labels[0]}</div>
                        <div className='content'>{`${arr[0]}`}</div>
                    </div>) : <></>}
                    {arr[1] ? (<div className='detail'>
                        <div className='label'>{labels[1]}</div>
                        <div className='content'>{`${arr[1]}`}</div>
                    </div>) : <></>}
                    {arr[2] ? (<div className='detail'>
                        <div className='label'>{labels[2]}</div>
                        <div className='content'>{`${arr[2]}`}</div>
                    </div>) : <></>}
                    {arr[3] ? (<div className='detail'>
                        <div className='label'>{labels[3]}</div>
                        <div className='content'>{`${arr[3]}`}</div>
                    </div>) : <></>}
                    {arr[4] ? (<div className='detail'>
                        <div className='label'>{labels[4]}</div>
                        <div className='content'>{`${arr[4]}`}</div>
                    </div>) : <></>}
                    {arr[5] ? (<div className='detail'>
                        <div className='label'>{labels[5]}</div>
                        <div className='content'>{`${arr[5]}`}</div>
                    </div>) : <></>}
                    {arr[6] ? (<div className='detail'>
                        <div className='label'>{labels[6]}</div>
                        <div className='content'>{`${arr[6]}`}</div>
                    </div>) : <></>}
                </div>
                <div className='block'>
                    <h2>Study Details</h2>
                    {arr[7] ? (<div className='detail'>
                        <div className='label'>{labels[7]}</div>
                        <div className='content'>{`${arr[7]}`}</div>
                    </div>) : <></>}
                    {arr[8] ? (<div className='detail'>
                        <div className='label'>{labels[8]}</div>
                        <div className='content'>{`${arr[8]}`}</div>
                    </div>) : <></>}
                    {arr[9] ? (<div className='detail'>
                        <div className='label'>{labels[9]}</div>
                        <div className='content'>{`${arr[9]}`}</div>
                    </div>) : <></>}
                    {arr[10] ? (<div className='detail'>
                        <div className='label'>{labels[10]}</div>
                        <div className='content'>{`${arr[10]}`}</div>
                    </div>) : <></>}
                    {arr[11] ? (<div className='detail'>
                        <div className='label'>{labels[11]}</div>
                        <div className='content'>{`${arr[11]}`}</div>
                    </div>) : <></>}
                    {arr[12] ? (<div className='detail'>
                        <div className='label'>{labels[12]}</div>
                        <div className='content'>{`${arr[12]}`}</div>
                    </div>) : <></>}
                    {arr[13] ? (<div className='detail'>
                        <div className='label'>{labels[13]}</div>
                        <div className='content'>{`${arr[13]}`}</div>
                    </div>) : <></>}
                </div>
                <div className='block'>
                    <h2>Admission</h2>
                    {arr[14] ? (<div className='detail'>
                        <div className='label'>{labels[14]}</div>
                        <div className='content'>{`${arr[14]}`}</div>
                    </div>) : <></>}
                    {arr[15] ? (<div className='detail'>
                        <div className='label'>{labels[15]}</div>
                        <div className='content'>{`${arr[15]}`}</div>
                    </div>) : <></>}
                </div>
            </div>
        </div>
    )
}

export default View;
