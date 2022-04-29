import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Xpto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public email: string

  @column()
  public telefone: string
  
  @column()
  public rua: string

  @column()
  public porta: string

  @column()
  public complemento_morada: string

  @column()
  public codigo_postal: string

  @column()
  public cidade: string
  
  @column()
  public nome_operadora: string

  @column()
  public valor: string

  @column()
  public qualidade: string

  @column()
  public velocidade: string

  @column()
  public opiniao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
