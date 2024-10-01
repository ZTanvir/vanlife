CREATE VIEW "vans_details" AS
    SELECT vans.id,van_images.path,name,rent,descriptions,type  
    FROM van_images 
        JOIN vans ON van_images.id=vans.image_id;