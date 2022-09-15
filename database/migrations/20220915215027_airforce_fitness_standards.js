/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function up(knex){
    return knex.schema.createTable('airforce_fitness_standards', table => {
        table.increments('id');
        table.string('age');
        table.string('gender');
        table.string('pushups');
        table.string('pushups_points');
        table.string('situps');
        table.string('situps_points');
        table.string('run');
        table.string('run_points');
        table.string('healthRisk');
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export function down(knex) {
    return knex.schema.dropTableIfExists('airforce_fitness_standards');
};
