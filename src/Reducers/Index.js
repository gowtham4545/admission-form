import { AGREE, AREA, CCITY, CITY, CNAME, COURSE, CSTATE, FNAME, GENDER, GRADE, MNAME, NAME, PERCENT, PHOTO, STATE, SUBJECT, SYLLABUS } from '../constants';
import { combineReducers } from "redux";

const initialState={
    name:'',
    fName:'',
    mName:'',
    city:'',
    state:'',
    gender:null,
    area:undefined,
    image:null,
    cName:'',
    cCity:'',
    cState:'',
    syllabus:'',
    subject:'',
    percent:'',
    grade:'',
    course:'',
    agree:''
}

const Reducer=(state=initialState,action)=>{
    switch (action.type) {
        case NAME: return (state.name=action.payload)?state:state;
        case FNAME: return (state.fName=action.payload)?state:state;
        case MNAME: return (state.mName=action.payload)?state:state;
        case CITY: return (state.city=action.payload)?state:state;
        case STATE: return (state.state=action.payload)?state:state;
        case GENDER: return (state.gender=action.payload)?state:state;
        case AREA: return (state.area=action.payload)?state:state;
        case PHOTO: return (state.image=action.payload)?state:state;
        case CNAME: return (state.cName=action.payload)?state:state;
        case CCITY: return (state.cCity=action.payload)?state:state;
        case CSTATE: return (state.cState=action.payload)?state:state;
        case SYLLABUS: return (state.syllabus=action.payload)?state:state;
        case SUBJECT: return (state.subject=action.payload)?state:state;
        case GRADE: return (state.grade=action.payload)?state:state;
        case PERCENT: return (state.percent=action.payload)?state:state;
        case COURSE: return (state.course=action.payload)?state:state;
        case AGREE: return (state.agree=action.payload)?state:state;
        default: return state
            break;
    }
}
const rootReducer=combineReducers({Reducer});
export default rootReducer;