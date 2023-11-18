import { Transaction } from '../domain/transaction';
import { TransactionRepository } from '../domain/transactionRepository';

export class CreateTransactionUseCase {

    constructor(private readonly transactionRepository: TransactionRepository) { }

    async run(
        date: Date,
        type: boolean,
        amount: number,
        description: string,
        categoriId: number,
        accountId: number
    ): Promise<Transaction | Error | string> {
        try {

            console.log('first', date, type, amount, description, categoriId , accountId)
            if (!date ||!type|| !amount || !description || !categoriId || !accountId) {
                return new Error('No se pudo crear la cuenta');
            }
            const createTransaction = await this.transactionRepository.createTransaction(date, type, amount, description, categoriId, accountId);
            if (createTransaction instanceof Error) {
                return new Error('No se pudo encontrar la transaccion');
            }

            return createTransaction;
        } catch (Error: any) {
            return new Error('Error al encontrar la transaccion: ' + Error.message);
        }
    }
}
