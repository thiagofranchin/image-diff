# IMAGE DIFF

Criado para efetuar testes de visual regression..

### Requerimentos

- Requer **PHP 7** instalado.
- Para desenvolvedores requer **Node.js** instalado.

## Modo de uso

Coloque as imagens correspondentes nas pastas:
- `/images/before`
- `/images/after`
- `/images/diff`

A comparação das imagens que serão exibidas segue a seguinte lógica.

`sim` Existe a imagem na pasta.
`não` Não existe a imagem na pasta.

As imagens serão exibidas quando:
| Before | After | Diff  |
| :---:  | :---: | :---: |
| `sim`  | `sim` | `sim` |
| `não`  | `sim` | `não` |
| `sim`  | `não` | `não` |

Nenhuma das imagens será exibida quando:
| Before | After | Diff  |
| :---:  | :---: | :---: |
| `sim`  | `sim` | `não` |

Abra o terminal e execulte o comando:

```
$php -S localhost:8000
```

Abra no browser a URL: http://localhost:8000/.
