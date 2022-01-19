import { parse } from "date-fns";
import { DATE_FORMAT } from "../common/constants";

export const parseDate = (date) => parse(date, DATE_FORMAT, new Date());
