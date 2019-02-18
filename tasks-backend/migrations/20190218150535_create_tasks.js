
exports.up = function(knex, Promise) {
    return knex.schema.createTable('tasks', table =>{
        table.increments('id').primary()
        table.string('desc').notNullable()
        table.dateTime('estimateAt')
        table.dateTime('doneAt')
        table.integer('userId').references('id')
            .inTable('users').notNullable()
    })
};

exports.down = function(knex, Promise) {
    knex.schema.dropTable('tasks')
};
