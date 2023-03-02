import { EVENTID } from "../conf";


export enum ParamsEnum {
    aboveTheFold= `events/${EVENTID}` as any,
    eventList = `days?eventId=${EVENTID}` as any,
    speakers = `speakers?eventId=${EVENTID}` as any,
    singleDayTracks1= `tracks?eventId=${EVENTID}&dayId=` as any,
    singleDayTracks2= `&_sort=startHour&_order=asc` as any,
}
