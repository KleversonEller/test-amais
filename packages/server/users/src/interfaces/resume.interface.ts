/* eslint-disable @typescript-eslint/naming-convention */
type IResume = {
	cpf: string;
	birthDate: string;
	sex: string;
	civilState: string;
	schooling: string;
	specialization?: string | undefined;
	company?: string | undefined;
	office?: string | undefined;
	wage: string;
};
export default IResume;
