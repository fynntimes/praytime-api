import PrayTimes from '../praytime.js';
import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { paramMissingError } from '@shared/constants';

const router = Router();

function daysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
}

router.get('/', async (req: Request, res: Response) => {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const timeZone = req.query.tz;
    const dst = (req.query.dst || '') === 'true';
    const month = +req.query.m - 1;
    const day = +req.query.d;
    const year = +req.query.y;

    if (day) {
        // they asked for a specific day
        return res.status(OK).json(PrayTimes.getTimes(
            [year, month, day],
            [lat, lon],
            timeZone,
            dst,
            '12h'
        ));
    } else {
        const n = daysInMonth(month, year);

        const obj: { [k: string]: any } = {};

        for (let i = 1; i < n; i++) {
            obj[i.toString()] = PrayTimes.getTimes(
                [year, month, i],
                [lat, lon],
                timeZone,
                dst,
                '12h'
            );
        }

        return res.status(OK).json(obj);
    }
});

export default router;
