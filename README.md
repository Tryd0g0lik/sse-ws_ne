[![Build status](https://ci.appveyor.com/api/projects/status/m7rwpuj547x2gkcr/branch/master?svg=true)](https://ci.appveyor.com/project/Tryd0g0lik/sse-ws-ne/branch/master)

Backend подключение примерно 50 сек.
 
Правила сдачи:

1. Всё должно собираться через Webpack (включая картинки и стили) и выкладываться на Github Pages через Appveyor
2. В качестве результата присылайте проверяющему ссылки на ваши GitHub-проекты
3. Авто-тесты писать не требуется
4. Серверная часть должна быть выложена на [Render](https://render.com/). Посмотрите [инструкцию](https://github.com/netology-code/ahj-homeworks/tree/video/docs/render#readme) или [документацию](https://render.com/docs/deploy-node-express-app), как развертывать серверную часть на Render.

---

## Чат
### Описание

Вам необходимо реализовать и серверную, и клиентскую часть. Серверную часть мы предлагаем вам реализовать на базе пакета ws.
При загрузке страницы появляется всплывающее окно, в котором запрашивается никнейм, под которым вы будете зарегистрированы в чате:

Если такой никнейм свободен, то открывается окно чата, в противном же случае вы должны сообщить пользователю о том, что никнейм занят и ему необходимо выбрать другой (продумайте, как вы реализуете это).

Обратите внимание: сообщения всех участников чата (кроме ваших) выравниваются по левому краю, а ваши - по правому.

Важно: `You` - это не никнейм, это указатель на то, что это Вы.

Важная детально: при отключении пользователя он должен удаляться из списка пользователей в левой части.



