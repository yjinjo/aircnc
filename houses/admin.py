from django.contrib import admin
from .models import House


@admin.register(House)
class HouseAdmin(admin.ModelAdmin):
    fields = (
        "name",
        "address",
        ("price_per_night", "pets_allowed"),
    )

    list_display = (
        "name",
        "price_per_night",
        "address",
        "pets_allowed",
    )

    list_filter = (
        "price_per_night",
        "pets_allowed",
    )

    search_fields = ("address",)
    search_help_text = "Search Location"
    list_editable = ("pets_allowed",)
