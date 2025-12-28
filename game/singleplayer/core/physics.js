export class Physics {
    static move(player, world, dt) {
        const steps = 3;
        const step = dt / steps;

        for (let i = 0; i < steps; i++) {
            player.pos.x += player.vel.x * step;
            Physics.collide(player, world, "x");

            player.pos.y += player.vel.y * step;
            if (Physics.collide(player, world, "y")) {
                if (player.vel.y < 0) player.onGround = true;
                player.vel.y = 0;
            } else {
                player.onGround = false;
            }

            player.pos.z += player.vel.z * step;
            Physics.collide(player, world, "z");
        }
    }

    static collide(player, world, axis) {
        const w = player.collider.width / 2;
        const h = player.collider.height;

        const minX = Math.floor(player.pos.x - w);
        const maxX = Math.floor(player.pos.x + w);
        const minY = Math.floor(player.pos.y);
        const maxY = Math.floor(player.pos.y + h);
        const minZ = Math.floor(player.pos.z - w);
        const maxZ = Math.floor(player.pos.z + w);

        for (let x = minX; x <= maxX; x++) {
            for (let y = minY; y <= maxY; y++) {
                for (let z = minZ; z <= maxZ; z++) {
                    if (!world.isSolid(x, y, z)) continue;

                    if (axis === "x") {
                        if (player.vel.x > 0) player.pos.x = x - w;
                        else player.pos.x = x + 1 + w;
                        return true;
                    }

                    if (axis === "y") {
                        if (player.vel.y > 0) player.pos.y = y - h;
                        else player.pos.y = y + 1;
                        return true;
                    }

                    if (axis === "z") {
                        if (player.vel.z > 0) player.pos.z = z - w;
                        else player.pos.z = z + 1 + w;
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
