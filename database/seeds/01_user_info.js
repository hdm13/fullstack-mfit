/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('member_info').del()
  await knex('member_info').insert([
    {id: 1, username: 'user1', password: 'password', name:'name1', branch:'navy', gender:'male', physicalLimitations:'no'},
    {id: 2, username: 'user2', password: 'password', name:'name2', branch:'navy', gender:'female', physicalLimitations:'no'},
    {id: 3, username: 'user3', password: 'password', name:'name3', branch:'army', gender:'male', physicalLimitations:'yes'},
    {id: 4, username: 'user4', password: 'password', name:'name4', branch:'army', gender:'female', physicalLimitations:'no'},
  ]);
};
