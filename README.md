# node-views

lame tool to use Google Closure Template

### Configuration

```json
{
   "name": "views",
   "version" "0.0.1",
   "appdir": "./",
   "buildMode": "debug|release",
   "buildPathList": [
      {
         "description": "...",
         "from": "scripts/modules/templates/{*.soy}",
         "to": "scripts/modules/templates/{*.js}",
         "style": "skin/themes/1/{*.css}"
      }
   ]
}
```
