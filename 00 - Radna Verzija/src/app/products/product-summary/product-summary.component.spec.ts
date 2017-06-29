import { ProductSummaryComponent } from './product-summary.component';
import { ProductSummaryModel } from "./product-summary.model";
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductSummaryComponent', function () {
    let de: DebugElement;
    let comp: ProductSummaryComponent;
    let fixture: ComponentFixture<ProductSummaryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [ProductSummaryComponent],
            schemas: [NO_ERRORS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductSummaryComponent);
        comp = fixture.componentInstance;
        comp.productSummary = new ProductSummaryModel();
        comp.productSummary.id = 1;
        comp.productSummary.name = "Test product";
        comp.productSummary.price = 10;
        comp.productSummary.description = "Test description";
        de = fixture.debugElement.query(By.css('h3'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should have expected product name', () => {
        fixture.detectChanges();
        const h3 = de.nativeElement;
        expect(h3.innerText).toMatch("Test product");
    });
});
