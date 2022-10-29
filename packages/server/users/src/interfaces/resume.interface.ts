/* eslint-disable @typescript-eslint/naming-convention */
type IResume = {
	cpf: number;
	birthDate: number;
	sex: string;
	civilState: string;
	schooling: string;
	specialization?: string;
	company?: string;
	office?: string;
	wage: number;
};
export default IResume;
