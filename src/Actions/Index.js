import { AGREE, AREA, CCITY, CITY, CNAME, COURSE, CSTATE, FNAME, GENDER, GRADE, MNAME, NAME, PERCENT, PHOTO, STATE, SUBJECT, SYLLABUS } from '../constants';

export const nameChange = (name) => {
    return {
        type: NAME,
        payload: name
    }
}

export const fNameChange = (fName) => {
    return {
        type: FNAME,
        payload: fName
    }
}
export const mNameChange = (mName) => {
    return {
        type: MNAME,
        payload: mName
    }
}
export const cityChange = (name) => {
    return {
        type: CITY,
        payload: name
    }
}
export const stateChange = (name) => {
    return {
        type: STATE,
        payload: name
    }
}
export const genderChange = (name) => {
    return {
        type: GENDER,
        payload: name
    }
}
export const areaChange = (name) => {
    return {
        type: AREA,
        payload: name
    }
}
export const cNameChange = (name) => {
    return {
        type: CNAME,
        payload: name
    }
}
export const cCityChange = (name) => {
    return {
        type: CCITY,
        payload: name
    }
}
export const cStateChange = (name) => {
    return {
        type: CSTATE,
        payload: name
    }
}
export const syllabusChange = (name) => {
    return {
        type: SYLLABUS,
        payload: name
    }
}
export const subjectChange = (name) => {
    return {
        type: SUBJECT,
        payload: name
    }
}
export const percentChange = (name) => {
    return {
        type: PERCENT,
        payload: name
    }
}
export const gradeChange = (name) => {
    return {
        type: GRADE,
        payload: name
    }
}
export const courseChange = (name) => {
    return {
        type: COURSE,
        payload: name
    }
}
export const agreeChange = (name) => {
    return {
        type: AGREE,
        payload: name
    }
}
export const photoChange = (name) => {
    return {
        type: PHOTO,
        payload: name
    }
}