/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-extraneous-class */
import 'dotenv/config';
import * as jwt from 'jsonwebtoken';

import type IUser from 'src/interfaces/user.interface';

type jwtPayload = {
	data: string;
	iat: number;
	exp: number;
};

const secret = process.env.JWT_SECRET;

export default class Token {
	static newToken(data: string | IUser): string {
		const config: jwt.SignOptions = {
			algorithm: 'HS256',
			expiresIn: '1d',
		};

		const token = jwt.sign({data}, secret, config);
		return token;
	}

	static validateToken(token: string): string {
		const decoded = jwt.verify(token, secret);
		const {data} = (decoded as jwtPayload);

		return data;
	}
}
