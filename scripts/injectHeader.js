// injectHeader.js
const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, '../build/game.js')

// Cabeçalho do TIC-80
const header = `
// title:   Dark Forest
// author:  PHACF
// desc:    short description
// site:    website link
// license: MIT License (change this to your license of choice)
// version: 0.1
// script:  js
`

try {
  const originalCode = fs.readFileSync(filePath, 'utf8')
  if (!originalCode.startsWith('// title:')) {
    fs.writeFileSync(filePath, header + originalCode)
    console.log('✅ Cabeçalho do TIC-80 injetado com sucesso!')
  } else {
    console.log('ℹ️ Cabeçalho já presente no arquivo, nada foi alterado.')
  }
} catch (error) {
  console.error('❌ Erro ao injetar o cabeçalho:', error)
}
