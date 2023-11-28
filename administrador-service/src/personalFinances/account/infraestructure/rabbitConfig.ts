import amqp from 'amqplib';

export async function setupRabbitMQ() {
    const connection = await amqp.connect('amqp://administrador-service.up.railway.app');
    const channel = await connection.createChannel();

    const queueName = 'act-queue';
    const exchangeName = 'create-act';
    const routingKey = 'create.acount';

    await channel.assertQueue(queueName);
    await channel.bindQueue(queueName, exchangeName, routingKey);

    return { connection, channel, queueName };
}