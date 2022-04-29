import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Xpto from 'App/Models/Xpto';

export default class XptosController {
  public async index ({ response }) {
    try {
      const cadastros = await Xpto.all()
      return response.status(200).send(cadastros)
    } catch (error) {
      return response.status(500).send({ error })
    }
  }

  public async store ({ request, response }: HttpContextContract) {
    try {
      const xpto = await Xpto.create(request.body())
      return response.status(200).send({ xpto })
    } catch (error) {
      return response.status(500).send({ error })
    }
  }

}
