# REST API Con Node JS, Swagger, Express, My Json Server y JWT

Para probar el codigo, clonar el respositorio y ejecutar los siguientes comandos:

1. ``` npm install ```
2. ``` swagger project start ```

La documentacion swagger se puede visualizar en el [editor de Swagger](http://editor.swagger.io/#/) con la [configuracion del proyecto]( https://github.com/mdmg92/rest-api/blob/master/api/swagger/swagger.yaml)

Se define el recurso de posts para el servicio rest. 
Metodos disponibles:

|Verbo  |Recurso   |Resultado                                 |
|-------|:--------:|:----------------------------------------:|
|/POST  |auth      |Token de autenticacion                    |
|/GET   |posts     |Array de posts                            |
|/GET   |posts/{id}|Objeto post por id                        |
|/POST  |posts     |Guarda post. Retorna el post enviado*     |
|/PUT   |posts/{id}|Actualiza post. Retorna 1 en caso exitoso*|
|/DELETE|posts/{id}|Elimina post. Retorna 1 en caso exitoso*  |


>*Obs: Los cambios no perssiten en el servidor
