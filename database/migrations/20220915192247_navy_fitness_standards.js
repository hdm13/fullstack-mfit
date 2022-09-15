/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex){
    return knex.schema.createTable('navy_fitness_standards', table => {
        table.increments('id');
        table.string('age');
        table.string('gender');
        table.string('category');
        table.string('level');
        table.string('points');
        table.string('pushups');
        table.string('forearm_plank');
        table.string('run');
        table.string('row');
        table.string('swim_yard');
        table.string('swim_meter');
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function down(knex) {
    return knex.schema.dropTableIfExists('navy_fitness_standards');
};
