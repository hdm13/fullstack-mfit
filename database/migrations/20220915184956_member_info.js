/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex){
    return knex.schema.createTable('member_info', table => {
        table.increments('id');
        table.string('username');
        table.string('password');
        table.string('name');
        table.string('branch');
        table.string('gender');
        table.string('physicalLimitations');
    })  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function down(knex) {
    return knex.schema.dropTableIfExists('member_info');
};
