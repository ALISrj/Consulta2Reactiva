import io.reactivex.*
import java.util.concurrent.TimeUnit


object App {

  @main
  def reactivo() =

    case class Product(id:String, name:String,price:Double) // Creamos clase de productos

    val products: Observable[Product] = Observable.just(

      Product("1", "Chocolate", 20.0),
      Product("2", "Papa", 10.0),
      Product("3", "Zanahoria", 12.0),
      Product("4", "Leche", 16.0),
      Product("5", "Lechuga", 9.0)) // Creamos un observable de productos

    val filtrados: Observable[Product] = products
      .delay(3, TimeUnit.SECONDS) // Delay emite los valores 3 segundo más tarde
      .filter(_.price >= 12.0) // Filtramos por el precio


    filtrados.subscribe(println(_)) // Nos suscribimos a la emision de filtrados

    Thread.sleep(4000) // Esperamos el Delay para eso suspendemos el hilo 4 sgundos


}
