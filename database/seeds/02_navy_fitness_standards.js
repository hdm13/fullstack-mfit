/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('navy_fitness_standards').del()
  await knex('navy_fitness_standards').insert([

    {id: 1, age: '17-19', gender: 'male', category:'Outstanding',   level:'High',   points:'100', pushups:'92', forearm_plank: "3:24", run: "8:15", row: "7:00",  swim_yard: "6:30",  swim_meter: "6:20"},
    {id: 2, age: '17-19', gender: 'male', category:'Outstanding',   level:'Medium', points:'95',  pushups:'91', forearm_plank: "3:19", run: "8:45", row: "7:10",  swim_yard: "6:45",  swim_meter: "6:35"},
    {id: 3, age: '17-19', gender: 'male', category:'Outstanding',   level:'Low',    points:'90',  pushups:'86', forearm_plank: "3:14", run: "9:00", row: "7:20",  swim_yard: "7:15",  swim_meter: "7:05"},
    {id: 4, age: '17-19', gender: 'male', category:'Excellent',     level:'High',   points:'85',  pushups:'82', forearm_plank: "3:04", run: "9:15", row: "7:30",  swim_yard: "7:45",  swim_meter: "7:35"},
    {id: 5, age: '17-19', gender: 'male', category:'Excellent',     level:'Medium', points:'80',  pushups:'79', forearm_plank: "2:53", run: "9:30", row: "7:40",  swim_yard: "8:15",  swim_meter: "8:05"},
    {id: 6, age: '17-19', gender: 'male', category:'Excellent',     level:'Low',    points:'75',  pushups:'76', forearm_plank: "2:43", run: "9:45", row: "7:50",  swim_yard: "8:30",  swim_meter: "8:20"},
    {id: 7, age: '17-19', gender: 'male', category:'Good',          level:'High',   points:'70',  pushups:'68', forearm_plank: "2:23", run: "10:00", row: "8:10", swim_yard:"9:15",   swim_meter: "9:05"},
    {id: 8, age: '17-19', gender: 'male', category:'Good',          level:'Medium', points:'65',  pushups:'60', forearm_plank: "2:02", run: "10:30", row: "8:30", swim_yard: "10:30", swim_meter: "10:20"},
    {id: 9, age: '17-19', gender: 'male', category:'Good',          level:'Low',    points:'60',  pushups:'51', forearm_plank: "1:42", run: "11:00", row: "8:50", swim_yard: "11:15", swim_meter: "11:05"},
    {id: 10, age: '17-19', gender: 'male', category:'Satisfactory', level:'High',   points:'55',  pushups:'49', forearm_plank: "1:32", run: "12:00", row: "9:00", swim_yard: "11:45", swim_meter: "11:35"},
    {id: 11, age: '17-19', gender: 'male', category:'Satisfactory', level:'Medium', points:'50',  pushups:'46', forearm_plank: "1:22", run: "12:15", row: "9:10", swim_yard: "12:15", swim_meter: "12:05"},
    {id: 12, age: '17-19', gender: 'male', category:'Probationary', level:'Low',    points:'45',  pushups:'42', forearm_plank: "1:11", run: "12:45", row: "9:20", swim_yard: "12:45", swim_meter: "12:35"},

    {id: 13, age: '20-24', gender: 'male', category:'Outstanding',  level:'High',   points:'100', pushups:'87', forearm_plank: "3:20", run: "8:30", row: "7:05",  swim_yard: "6:30",  swim_meter: "6:20"},
    {id: 14, age: '20-24', gender: 'male', category:'Outstanding',  level:'Medium', points:'95',  pushups:'86', forearm_plank: "3:15", run: "9:00", row: "7:15",  swim_yard: "7:00",  swim_meter: "6:50"},
    {id: 15, age: '20-24', gender: 'male', category:'Outstanding',  level:'Low',    points:'90',  pushups:'81', forearm_plank: "3:10", run: "9:15", row: "7:25",  swim_yard: "7:30",  swim_meter: "7:20"},
    {id: 16, age: '20-24', gender: 'male', category:'Excellent',    level:'High',   points:'85',  pushups:'77', forearm_plank: "3:00", run: "9:45", row: "7:35",  swim_yard: "8:00",  swim_meter: "7:50"},
    {id: 17, age: '20-24', gender: 'male', category:'Excellent',    level:'Medium', points:'80',  pushups:'74', forearm_plank: "2:50", run: "10:00", row: "7:45", swim_yard: "8:15",  swim_meter: "8:05"},
    {id: 18, age: '20-24', gender: 'male', category:'Excellent',    level:'Low',    points:'75',  pushups:'71', forearm_plank: "2:40", run: "10:30", row: "7:55", swim_yard: "8:45",  swim_meter: "8:35"},
    {id: 19, age: '20-24', gender: 'male', category:'Good',         level:'High',   points:'70',  pushups:'64', forearm_plank: "2:20", run: "10:45", row: "8:15", swim_yard:"9:30",   swim_meter: "9:20"},
    {id: 20, age: '20-24', gender: 'male', category:'Good',         level:'Medium', points:'65',  pushups:'55', forearm_plank: "2:00", run: "11:30", row: "8:35", swim_yard: "10:30", swim_meter: "10:20"},
    {id: 21, age: '20-24', gender: 'male', category:'Good',         level:'Low',    points:'60',  pushups:'47', forearm_plank: "1:40", run: "12:00", row: "8:55", swim_yard: "11:30", swim_meter: "11:20"},
    {id: 22, age: '20-24', gender: 'male', category:'Satisfactory', level:'High',   points:'55',  pushups:'45', forearm_plank: "1:30", run: "12:45", row: "9:05", swim_yard: "12:00", swim_meter: "11:50"},
    {id: 23, age: '20-24', gender: 'male', category:'Satisfactory', level:'Medium', points:'50',  pushups:'42', forearm_plank: "1:20", run: "13:15", row: "9:15", swim_yard: "12:15", swim_meter: "12:05"},
    {id: 24, age: '20-24', gender: 'male', category:'Probationary', level:'Low',    points:'45',  pushups:'37', forearm_plank: "1:10", run: "13:30", row: "9:25", swim_yard: "13:00", swim_meter: "12:50"},

    {id: 25, age: '25-29', gender: 'male', category:'Outstanding',  level:'High',   points:'100', pushups:'84', forearm_plank: "3:16", run: "8:55",  row: "7:10", swim_yard: "6:38",  swim_meter: "6:28"},
    {id: 26, age: '25-29', gender: 'male', category:'Outstanding',  level:'Medium', points:'95',  pushups:'82', forearm_plank: "3:11", run: "9:23",  row: "7:20", swim_yard: "7:08",  swim_meter: "6:58"},
    {id: 27, age: '25-29', gender: 'male', category:'Outstanding',  level:'Low',    points:'90',  pushups:'77', forearm_plank: "3:06", run: "9:38",  row: "7:30", swim_yard: "7:38",  swim_meter: "7:28"},
    {id: 28, age: '25-29', gender: 'male', category:'Excellent',    level:'High',   points:'85',  pushups:'73', forearm_plank: "2:56", run: "10:15", row: "7:40", swim_yard: "8:08",  swim_meter: "7:58"},
    {id: 29, age: '25-29', gender: 'male', category:'Excellent',    level:'Medium', points:'80',  pushups:'69', forearm_plank: "2:47", run: "10:30", row: "7:50", swim_yard: "8:23",  swim_meter: "8:13"},
    {id: 30, age: '25-29', gender: 'male', category:'Excellent',    level:'Low',    points:'75',  pushups:'67', forearm_plank: "2:37", run: "10:52", row: "8:00", swim_yard: "8:53",  swim_meter: "8:43"},
    {id: 31, age: '25-29', gender: 'male', category:'Good',         level:'High',   points:'70',  pushups:'60', forearm_plank: "2:17", run: "11:23", row: "8:20", swim_yard:"9:38",   swim_meter: "9:28"},
    {id: 32, age: '25-29', gender: 'male', category:'Good',         level:'Medium', points:'65',  pushups:'51', forearm_plank: "1:58", run: "12:15", row: "8:40", swim_yard: "10:38", swim_meter: "10:28"},
    {id: 33, age: '25-29', gender: 'male', category:'Good',         level:'Low',    points:'60',  pushups:'44', forearm_plank: "1:38", run: "12:53", row: "9:00", swim_yard: "11:38", swim_meter: "11:28"},
    {id: 34, age: '25-29', gender: 'male', category:'Satisfactory', level:'High',   points:'55',  pushups:'41', forearm_plank: "1:28", run: "13:23", row: "9:10", swim_yard: "12:08", swim_meter: "11:58"},
    {id: 35, age: '25-29', gender: 'male', category:'Satisfactory', level:'Medium', points:'50',  pushups:'38', forearm_plank: "1:18", run: "13:45", row: "9:20", swim_yard: "12:23", swim_meter: "12:03"},
    {id: 36, age: '25-29', gender: 'male', category:'Probationary', level:'Low',    points:'45',  pushups:'34', forearm_plank: "1:09", run: "14:00", row: "9:30", swim_yard: "13:08", swim_meter: "12:58"},

    {id: 37, age: '17-19', gender: 'female', category:'Outstanding',   level:'High',   points:'100', pushups:'51', forearm_plank: "3:14", run: "9:29",  row: "8:00",  swim_yard: "6:45",  swim_meter: "6:35"},
    {id: 38, age: '17-19', gender: 'female', category:'Outstanding',   level:'Medium', points:'95',  pushups:'50', forearm_plank: "3:09", run: "11:15", row: "8:10",  swim_yard: "7:45",  swim_meter: "7:35"},
    {id: 39, age: '17-19', gender: 'female', category:'Outstanding',   level:'Low',    points:'90',  pushups:'47', forearm_plank: "3:04", run: "11:30", row: "8:20",  swim_yard: "8:30",  swim_meter: "8:20"},
    {id: 40, age: '17-19', gender: 'female', category:'Excellent',     level:'High',   points:'85',  pushups:'45', forearm_plank: "2:53", run: "11:45", row: "8:30",  swim_yard: "9:00",  swim_meter: "8:50"},
    {id: 41, age: '17-19', gender: 'female', category:'Excellent',     level:'Medium', points:'80',  pushups:'43', forearm_plank: "2:43", run: "12:00", row: "8:40",  swim_yard: "9:30",  swim_meter: "9:20"},
    {id: 42, age: '17-19', gender: 'female', category:'Excellent',     level:'Low',    points:'75',  pushups:'42', forearm_plank: "2:33", run: "12:30", row: "8:50",  swim_yard: "9:45",  swim_meter: "9:35"},
    {id: 43, age: '17-19', gender: 'female', category:'Good',          level:'High',   points:'70',  pushups:'36', forearm_plank: "2:13", run: "12:45", row: "9:10",  swim_yard:"10:45",  swim_meter: "10:35"},
    {id: 44, age: '17-19', gender: 'female', category:'Good',          level:'Medium', points:'65',  pushups:'30', forearm_plank: "1:52", run: "13:00", row: "9:40",  swim_yard: "12:00", swim_meter: "11:50"},
    {id: 45, age: '17-19', gender: 'female', category:'Good',          level:'Low',    points:'60',  pushups:'24', forearm_plank: "1:32", run: "13:30", row: "10:10", swim_yard: "13:00", swim_meter: "12:50"},
    {id: 46, age: '17-19', gender: 'female', category:'Satisfactory',  level:'High',   points:'55',  pushups:'22', forearm_plank: "1:22", run: "14:15", row: "10:20", swim_yard: "13:15", swim_meter: "13:05"},
    {id: 47, age: '17-19', gender: 'female', category:'Satisfactory',  level:'Medium', points:'50',  pushups:'20', forearm_plank: "1:11", run: "14:45", row: "10:30", swim_yard: "13:45", swim_meter: "13:35"},
    {id: 48, age: '17-19', gender: 'female', category:'Probationary',  level:'Low',    points:'45',  pushups:'19', forearm_plank: "1:01", run: "15:00", row: "10:40", swim_yard: "14:15", swim_meter: "14:05"},

    {id: 49, age: '20-24', gender: 'female', category:'Outstanding',   level:'High',   points:'100', pushups:'48', forearm_plank: "3:10", run: "9:47",  row: "8:05",  swim_yard: "7:15",  swim_meter: "7:05"},
    {id: 50, age: '20-24', gender: 'female', category:'Outstanding',   level:'Medium', points:'95',  pushups:'47', forearm_plank: "3:05", run: "11:15", row: "8:15",  swim_yard: "8:00",  swim_meter: "7:50"},
    {id: 51, age: '20-24', gender: 'female', category:'Outstanding',   level:'Low',    points:'90',  pushups:'44', forearm_plank: "3:00", run: "11:30", row: "8:25",  swim_yard: "8:45",  swim_meter: "8:35"},
    {id: 52, age: '20-24', gender: 'female', category:'Excellent',     level:'High',   points:'85',  pushups:'43', forearm_plank: "2:50", run: "12:15", row: "8:35",  swim_yard: "9:15",  swim_meter: "9:05"},
    {id: 53, age: '20-24', gender: 'female', category:'Excellent',     level:'Medium', points:'80',  pushups:'40', forearm_plank: "2:40", run: "12:45", row: "8:45",  swim_yard: "9:45",  swim_meter: "9:35"},
    {id: 54, age: '20-24', gender: 'female', category:'Excellent',     level:'Low',    points:'75',  pushups:'39', forearm_plank: "2:30", run: "13:15", row: "8:55",  swim_yard: "10:00", swim_meter: "9:50"},
    {id: 55, age: '20-24', gender: 'female', category:'Good',          level:'High',   points:'70',  pushups:'33', forearm_plank: "2:10", run: "13:30", row: "9:15",  swim_yard:"11:00",  swim_meter: "10:50"},
    {id: 56, age: '20-24', gender: 'female', category:'Good',          level:'Medium', points:'65',  pushups:'28', forearm_plank: "1:50", run: "13:45", row: "9:45",  swim_yard: "12:15", swim_meter: "12:05"},
    {id: 57, age: '20-24', gender: 'female', category:'Good',          level:'Low',    points:'60',  pushups:'21', forearm_plank: "1:30", run: "14:15", row: "10:15", swim_yard: "13:15", swim_meter: "13:05"},
    {id: 58, age: '20-24', gender: 'female', category:'Satisfactory',  level:'High',   points:'55',  pushups:'20', forearm_plank: "1:20", run: "15:00", row: "10:25", swim_yard: "13:45", swim_meter: "13:35"},
    {id: 59, age: '20-24', gender: 'female', category:'Satisfactory',  level:'Medium', points:'50',  pushups:'17', forearm_plank: "1:10", run: "15:15", row: "10:35", swim_yard: "14:00", swim_meter: "13:50"},
    {id: 60, age: '20-24', gender: 'female', category:'Probationary',  level:'Low',    points:'45',  pushups:'16', forearm_plank: "1:00", run: "15:30", row: "10:45", swim_yard: "14:30", swim_meter: "14:20"},

    {id: 61, age: '25-29', gender: 'female', category:'Outstanding',   level:'High',   points:'100', pushups:'46', forearm_plank: "3:06", run: "10:17", row: "8:10",  swim_yard: "7:23",  swim_meter: "7:13"},
    {id: 62, age: '25-29', gender: 'female', category:'Outstanding',   level:'Medium', points:'95',  pushups:'45', forearm_plank: "3:01", run: "11:30", row: "8:20",  swim_yard: "8:15",  swim_meter: "8:05"},
    {id: 63, age: '25-29', gender: 'female', category:'Outstanding',   level:'Low',    points:'90',  pushups:'43', forearm_plank: "2:56", run: "11:45", row: "8:30",  swim_yard: "9:00",  swim_meter: "8:50"},
    {id: 64, age: '25-29', gender: 'female', category:'Excellent',     level:'High',   points:'85',  pushups:'41', forearm_plank: "2:47", run: "12:30", row: "8:40",  swim_yard: "9:30",  swim_meter: "9:20"},
    {id: 65, age: '25-29', gender: 'female', category:'Excellent',     level:'Medium', points:'80',  pushups:'39', forearm_plank: "2:37", run: "13:00", row: "8:50",  swim_yard: "10:00", swim_meter: "9:50"},
    {id: 66, age: '25-29', gender: 'female', category:'Excellent',     level:'Low',    points:'75',  pushups:'37', forearm_plank: "2:27", run: "13:23", row: "9:00",  swim_yard: "10:15", swim_meter: "10:05"},
    {id: 67, age: '25-29', gender: 'female', category:'Good',          level:'High',   points:'70',  pushups:'30', forearm_plank: "2:07", run: "14:00", row: "9:20",  swim_yard: "11:15", swim_meter: "11:05"},
    {id: 68, age: '25-29', gender: 'female', category:'Good',          level:'Medium', points:'65',  pushups:'26', forearm_plank: "1:48", run: "14:30", row: "9:50",  swim_yard: "12:30", swim_meter: "12:20"},
    {id: 69, age: '25-29', gender: 'female', category:'Good',          level:'Low',    points:'60',  pushups:'19', forearm_plank: "1:28", run: "14:53", row: "10:20", swim_yard: "13:30", swim_meter: "13:20"},
    {id: 70, age: '25-29', gender: 'female', category:'Satisfactory',  level:'High',   points:'55',  pushups:'18', forearm_plank: "1:18", run: "15:23", row: "10:30", swim_yard: "13:53", swim_meter: "13:43"},
    {id: 71, age: '25-29', gender: 'female', category:'Satisfactory',  level:'Medium', points:'50',  pushups:'15', forearm_plank: "1:09", run: "15:45", row: "10:40", swim_yard: "14:15", swim_meter: "14:05"},
    {id: 72, age: '25-29', gender: 'female', category:'Probationary',  level:'Low',    points:'45',  pushups:'13', forearm_plank: "0:59", run: "16:08", row: "10:50", swim_yard: "14:45", swim_meter: "14:35"},
    
  ]);
};
