# NgMultipleStyles

This project demonstrates four different methods for communicating between two components.  To run each method specify the configuration.

```
ng serve --configuration method-one
ng serve --configuration method-two
ng serve --configuration method-three
ng serve --configuration method-four
```

## Method One

Found in onec-nor.component.ts.  In this method there is only one component with no routing.

## Method Two

Found in twoc-nor.component.ts.  In this method there are two components and they communicate via a service.

## Method Three

Found in twoc-yor.component.ts.  In this method there are two components and they communicate via URLs.  This is the only method that actually has routing and where the `[RouterLink]` directive is doing anything.

## Method Four

Found in parent-child.component.ts.  In this method there are two components and they share via `@Input`/`@Output`.
