export async function GET(request) {
    const clients = [
      {
        "name": "Katka",
        "image": "/client1.png",
        "testimonial": "S Bárou jsem konečně našla cestu k fitness, která mi opravdu vyhovuje. Dříve jsem sice platila fitness trenéry, ale bez jejich vedení jsem se ve fitku ztrácela a cvičení mě nijak zvlášť nebavilo. Bára mě nejen naučila správné provedení cviků, ale také mi sestavila tréninkový plán, který bylo snadné dodržovat a který mi přinesl výsledky. Kromě cvičení mi Bára pomohla i s jídelníčkem, což mělo velký vliv na mou postavu. Ve svých 57 letech se cítím pevná a plná energie, což jsem už ani nečekala."
      },
      {
        "name": "Jana",
        "image": "/client2.png",
        "testimonial": "Bára mi pomohla najít motivaci a překonat těžké období. Tréninky jsou vždy skvělé, protože jsou pestré a nikdy se nenudím. Je to nejen trenérka, ale i motivátorka, která ví, jak člověka posunout dál."
      },
      {
        "name": "Lenka",
        "image": "/client3.png",
        "testimonial": "Cvičení s Bárou mi přineslo nejen zlepšení fyzické kondice, ale i pozitivní přístup k celému životu. Skvělé vedení a přístup."
      }
    ];
    return new Response(JSON.stringify(clients), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  